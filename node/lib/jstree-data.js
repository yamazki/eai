const retrunJstreeData = (req, res, next) => {
  res.json( [
    {
      "text": "Web",
      "children" : [
        { 
          "text" : "HTTP/GET",
          "icon": "/img/my-img/http-get-icon.png",
        }
      ] 
    }
  ])
}

module.exports.retrunJstreeData = retrunJstreeData; 