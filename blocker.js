const defineCss = () => {
    return `<style>
        body{
            margin: 0;
            padding: 0l
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 100%;
            height: auto;
        }
    </style>`;
};

const defineHtml = () => {
    return `<div class="content">
        <img src="https://precision-recruiters.com/wp-content/uploads/Back-to-Work.gif" alt"back to work signal">
    </div>`;
};


const blockUrls = ["www.facebook.com", "www.instagram.com", "twitter.com"];
const set = new Set(blockUrls);

if (set.has(window.location.hostname)) {
    // replace HTML and CSS
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}

