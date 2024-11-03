const interval = setInterval(() => {
  const nextWorkdayButton = document.querySelector('.px-4.py-2.text-sm.font-medium.rounded-r-lg.bg-gray-200');

  if (nextWorkdayButton) {
    nextWorkdayButton.click();
    clearInterval(interval);
  }
}, 10);

for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText === '.zoomed-out-room') {
          rule.style.display = 'none';
        //   rule.style = '';
        } else if (rule.selectorText === '.hidden') {
          rule.style.display = 'block';
        }
        else if (rule.selectorText === '.cursor-pointer'){
            rule.style.display = 'none';
        }
        else if (rule.selectorText === '.origin-\[85\%_20\%\]'){
            rule.style.display = 'none';
        }
      }
    } catch (e) {
      console.warn('Could not access some stylesheets due to cross-origin restrictions');
    }
}
