/* ==========================================================================
   Komponent quizu. Zero zależności.

   Użycie:
   <div class="quiz">
     <p class="quiz__q">Pytanie</p>
     <div class="quiz__opts">
       <button class="quiz__opt" data-correct data-why="Wyjaśnienie">Odp A</button>
       <button class="quiz__opt" data-why="Dlaczego nie">Odp B</button>
     </div>
   </div>

   <div class="recall" data-hint="Powiedz na głos, zanim klikniesz.">
     <p class="recall__q">Pytanie</p>
     <div class="recall__a">Odpowiedź</div>
   </div>

   <p class="score"></p>   <!-- opcjonalny licznik, jeden na stronę -->

   Przycisk „Skopiuj dla nauczyciela" dokłada się sam po ostatnim quizie
   w każdej grupie sąsiadujących .quiz. Kopiuje do schowka wybory ucznia
   w formacie gotowym do wklejenia w czacie.
   ========================================================================== */

(function () {
  'use strict';

  var answered = 0, correct = 0, total = 0;

  function updateScore() {
    var el = document.querySelector('.score');
    if (!el || !total) return;
    el.innerHTML = answered
      ? 'Odpowiedzi: <b>' + answered + '/' + total + '</b> &middot; trafione: <b>' + correct + '</b>'
      : 'Pytań w tej lekcji: <b>' + total + '</b>';
  }

  function initQuiz(quiz) {
    var opts = Array.prototype.slice.call(quiz.querySelectorAll('.quiz__opt'));
    if (!opts.length) return;
    total++;

    var fb = document.createElement('p');
    fb.className = 'quiz__fb';
    fb.hidden = true;
    quiz.appendChild(fb);

    opts.forEach(function (opt) {
      opt.type = 'button';
      opt.addEventListener('click', function () {
        if (quiz.dataset.done) return;
        quiz.dataset.done = '1';

        var isRight = opt.hasAttribute('data-correct');
        quiz.dataset.choice = opt.textContent.trim();
        quiz.dataset.right = isRight ? '1' : '0';
        answered++;
        if (isRight) correct++;

        opts.forEach(function (o) {
          o.disabled = true;
          if (o.hasAttribute('data-correct')) o.classList.add('is-right');
          else if (o === opt) o.classList.add('is-wrong');
          else o.classList.add('is-dim');
        });

        var why = opt.getAttribute('data-why') || '';
        if (!isRight) {
          var right = quiz.querySelector('.quiz__opt[data-correct]');
          var rightWhy = right ? right.getAttribute('data-why') : '';
          why = (why ? why + ' ' : '') + (rightWhy || '');
        }
        fb.innerHTML = (isRight ? '<b>Dobrze.</b> ' : '<b>Nie tym razem.</b> ') + why;
        fb.className = 'quiz__fb ' + (isRight ? 'is-right' : 'is-wrong');
        fb.hidden = false;
        updateScore();
      });
    });
  }

  function initRecall(box) {
    var ans = box.querySelector('.recall__a');
    if (!ans) return;
    ans.hidden = true;

    var hint = box.getAttribute('data-hint') || 'Odpowiedz z pamięci, zanim sprawdzisz.';
    var h = document.createElement('p');
    h.className = 'recall__hint';
    h.textContent = hint;
    ans.parentNode.insertBefore(h, ans);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'recall__btn';
    btn.textContent = 'Pokaż odpowiedź';
    ans.parentNode.insertBefore(btn, ans);

    btn.addEventListener('click', function () {
      ans.hidden = false;
      btn.remove();
    });
  }


  /* --- Skopiuj dla nauczyciela ------------------------------------------ */

  function clean(el) {
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function quizLabel(quiz, i) {
    var tag = quiz.querySelector('.quiz__q .tag');
    return tag ? clean(tag) : 'P' + (i + 1);
  }

  function quizText(quiz) {
    var q = quiz.querySelector('.quiz__q');
    if (!q) return '';
    var copy = q.cloneNode(true);
    var tag = copy.querySelector('.tag');
    if (tag) tag.remove();
    var t = clean(copy);
    return t.length > 90 ? t.slice(0, 87) + '…' : t;
  }

  function buildReport(group) {
    var eyebrow = clean(document.querySelector('.eyebrow')).split('·')[0].trim();
    var title = clean(document.querySelector('h1')) || document.title;
    var ok = 0, done = 0;
    var lines = group.map(function (quiz, i) {
      var label = quizLabel(quiz, i);
      var rightOpt = quiz.querySelector('.quiz__opt[data-correct]');
      var right = clean(rightOpt);
      if (!quiz.dataset.done) return label + '  [brak odpowiedzi]  ' + quizText(quiz);
      done++;
      var isRight = quiz.dataset.right === '1';
      if (isRight) ok++;
      var verdict = isRight
        ? quiz.dataset.choice + ' ✓'
        : quiz.dataset.choice + ' ✗ (poprawnie: ' + right + ')';
      return label + '  [' + verdict + ']  ' + quizText(quiz);
    });
    var head = (eyebrow ? eyebrow + ' · ' : '') + title +
      ' — quiz: ' + ok + '/' + group.length +
      (done < group.length ? ' (odpowiedzi: ' + done + '/' + group.length + ')' : '');
    return head + '\n' + lines.join('\n');
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }

  function showManual(box, text) {
    var ta = box.querySelector('textarea');
    if (!ta) {
      ta = document.createElement('textarea');
      ta.className = 'teacher__text';
      ta.setAttribute('readonly', '');
      box.appendChild(ta);
    }
    ta.value = text;
    ta.rows = Math.min(12, text.split('\n').length + 1);
    ta.focus();
    ta.select();
  }

  function initTeacherCopy() {
    var quizzes = Array.prototype.slice.call(document.querySelectorAll('.quiz'));
    var group = [];
    quizzes.forEach(function (quiz, i) {
      group.push(quiz);
      var next = quiz.nextElementSibling;
      var nextIsQuiz = next && next.classList.contains('quiz');
      if (nextIsQuiz && i < quizzes.length - 1) return;

      var members = group;
      group = [];

      var box = document.createElement('div');
      box.className = 'teacher';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'teacher__btn';
      btn.textContent = 'Skopiuj dla nauczyciela';
      var msg = document.createElement('span');
      msg.className = 'teacher__msg';
      box.appendChild(btn);
      box.appendChild(msg);
      quiz.parentNode.insertBefore(box, quiz.nextSibling);

      btn.addEventListener('click', function () {
        var text = buildReport(members);
        var done = function () { msg.textContent = 'Skopiowano — wklej w czacie.'; };
        var fail = function () {
          if (fallbackCopy(text)) return done();
          msg.textContent = 'Nie udało się skopiować automatycznie — zaznacz i skopiuj poniżej.';
          showManual(box, text);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fail);
        } else {
          fail();
        }
      });
    });
  }

  function boot() {
    document.querySelectorAll('.quiz').forEach(initQuiz);
    document.querySelectorAll('.recall').forEach(initRecall);
    initTeacherCopy();
    updateScore();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
