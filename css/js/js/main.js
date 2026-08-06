// دالة تقليب البطائق التفاعلية (Flashcards)
function toggleCard(cardElement) {
    const answer = cardElement.querySelector('.card-answer');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        cardElement.style.borderColor = '#38bdf8';
    } else {
        answer.style.display = 'none';
        cardElement.style.borderColor = '#1f2937';
    }
}

// دالة تقييم الاختبار السريع
function evaluateQuiz(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const resultElement = document.getElementById('quizResult');

    if (!selectedOption) {
        resultElement.style.color = '#ef4444';
        resultElement.textContent = 'الرجاء اختيار إجابة أولاً.';
        return;
    }

    if (selectedOption.value === 'correct') {
        resultElement.style.color = '#10b981';
        resultElement.textContent = 'إجابة صحيحة! أحسنت، لقد فهمت الفكرة بنجاح.';
    } else {
        resultElement.style.color = '#ef4444';
        resultElement.textContent = 'إجابة خاطئة، حاول مراجعة قسم الثغرات الأمنية في المنهج.';
    }
}
