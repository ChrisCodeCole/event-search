import app from './app';
const port = process.env.PORT || 5000; //looks for env var called port (when deployed to Heroku), if none then locally users port 5000
app.listen(port, () => console.log('Express server listening on port ' + port));
