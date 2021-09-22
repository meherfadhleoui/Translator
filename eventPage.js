var conctextMenuItem = {
  id: "Translate",
  title: "Translate",
  contexts: ["selection"],
};
chrome.contextMenus.create(conctextMenuItem);
chrome.contextMenus.onClicked.addListener(async (clickData) => {
  if (clickData.menuItemId == "Translate" && clickData.selectionText) {
    fetchTranslatedText(clickData.selectionText);
  }
});

const fetchTranslatedText = async (value) => {
  await fetch("https://chrome-translate-extension.herokuapp.com/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value,
    }),
  })
    .then(async (res) => {
      alert(JSON.stringify(await res.json()));
    })

    .catch((err) => {
      alert(err);
    });
};
