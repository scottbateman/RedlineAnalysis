load( 'participant_validation.js' )
load( 'trial_validation.js' )
load( 'projection.js' )
db = connect( "mongodb+srv://admin:4AnB1q3z8m3vZFOV@cluster0-lnoo1.mongodb.net/redline?retryWrites=true" )

db.cumulative_entries.aggregate( pValid )
db.cumulative_entries.aggregate( tValid )
db.cumulative_entries.aggregate( projection )
