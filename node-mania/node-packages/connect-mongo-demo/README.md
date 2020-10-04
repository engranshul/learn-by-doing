## My learning 

* https://www.npmjs.com/package/connect-mongo
* connect-mongo : MongoDB session store for Connect and Express
* In many circumstances, connect-mongo will not be the only part 
  of your application which need a connection to a MongoDB database. It could be interesting to re-use an existing connection.

  Alternatively, you can configure connect-mongo to establish a new connection.
* A MongoStore instance will emit the following events:
 
  create :	A session has been created	
  touch :	A session has been touched (but not modified)	
  update : A session has been updated	
  set	: A session has been created OR updated (for compatibility purpose)
  destroy	: A session has been destroyed manually  