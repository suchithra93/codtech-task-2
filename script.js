document.getElementById('classifyButton').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    const category = document.getElementById('category').value;
  
    if (!text.trim()) {
      alert('Please enter some text to classify.');
      return;
    }
  
    // Simulate a classification process (replace with actual backend logic)
    const result = `Text classified as: ${category.toUpperCase()} with high confidence.`;
  
    document.getElementById('classificationOutput').innerText = result;
    document.getElementById('result').classList.remove('hidden');
  });
  