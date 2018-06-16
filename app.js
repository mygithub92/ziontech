var express = require('express');
var path = require('path');

const app = express();

app.use(express.static('ng-client/dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ng-client/dist/index.html'));
});

app.listen(8080, () => {  
    /* tslint:disable-next-line */
    console.log("Live on port: " + 8080);
  });