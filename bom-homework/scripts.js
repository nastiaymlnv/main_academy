const btnSection = document.querySelector('.btn');
const buttons = [...btnSection.querySelectorAll('button')];
const [props, newTab] = buttons;

let showProps = () => {
    let windowProps = window.location;
    document.open();
    document.write(windowProps);
    document.close();
}

let openTab = () => {
    const openedWindow = window.open('https://developer.mozilla.org/ru/docs/Web/API/Window', 'Google Tab',"width=800,height=600");
    openedWindow.resizeTo(500, 500);
    openedWindow.scrollBy(0, 100);
}

props.addEventListener('click', showProps);
newTab.addEventListener('click', openTab);

