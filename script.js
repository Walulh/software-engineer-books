function showHideBtn() {
    document.getElementById("sidebar-toc").classList.toggle("sidebar-toc-hide");
    document.getElementById("main-contents").classList.toggle("main-contents-full-width");
}

function clickOnMobileTocAnchorLink() {
    const w = window.outerWidth;
    const allAnchorLinks = document.getElementsByTagName("a");
    let allAnchorLinksTocLevel = [];

    for (let i = 0; i < allAnchorLinks.length; i++) {
        if ((w <= 768) && allAnchorLinks[i].className.substr(0, 10) == "toc-level-") {
            allAnchorLinks[i].onclick = function () { showHideBtn() };
            allAnchorLinksTocLevel.push(allAnchorLinks[i]);
        }
    }
}

clickOnMobileTocAnchorLink()

// OnHover Onclick A Link Buttons
const myAlinkBtn = document.getElementsByTagName('a');

for (i = 0; i < myAlinkBtn.length; i++) {
    myAlinkBtn[i].addEventListener('click', function () {
        return;
    });

    myAlinkBtn[i].addEventListener('mouseenter', function () {
        var self = this;
        window.countdown = setTimeout(function () { self.click(); }, 3000);
    });

    myAlinkBtn[i].addEventListener('mouseleave', function () {
        clearTimeout(countdown);
    });
}