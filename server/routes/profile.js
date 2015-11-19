/**
 * Profile POST Handler
 *
 * This express middleware function expects to recieve a post body, with req.body
 * as JSON object.  It will then take the posted first name, last name, and
 * favorite color and save it to the Stormpath Account object.
 *
 * @param  {object} req Express request object, with req.body populated with the JSON post data
 * @param  {object} res Express response object
 */
function profilePostHandler(req, res) {
  req.user.givenName = req.body.givenName;
  req.user.surname = req.body.surname;
  req.user.customData.favoriteColor = req.body.favoriteColor;

  /**
   * TODO: consolidate into a single save call when this issue is resolved:
   * https://github.com/stormpath/express-stormpath/issues/156
   */
  req.user.save(function(err){
    if(err){
      res.status(err.status || 400).json(err);
    }else{
      req.user.customData.save(function (err){
        if(err){
          res.status(err.status || 400).json(err);
        }else{
          res.end();
        }
      });
    }
  });
}

module.exports = profilePostHandler;