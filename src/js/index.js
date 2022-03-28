import 'bulma' // Сеточная система бибилотеки Bulma
import '../scss/style.scss'
// import '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css'
// import '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js'

const lessonContentElems = document.querySelectorAll('.lesson-content')

for (let i = 0; i < lessonContentElems.length; i++) {
    const lessonContent = lessonContentElems[i];
    const parent = lessonContent.parentElement
    const parentWidth = parent.clientWidth;
    const blockCode = parent.querySelector('pre code')
    const firstTabs = lessonContent.innerHTML.match(/\t+/)[0]

    console.log(parent, parentWidth)
    blockCode.parentElement.style.width = parentWidth + 'px'
    blockCode.innerHTML = lessonContent.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(new RegExp(firstTabs, 'g'), '').replace(/	/g, '    ')
}

document.querySelectorAll('pre code').forEach((el) => {
  hljs.highlightElement(el);
});