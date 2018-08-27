load( 'participant_validation.js' )
load( 'trial_validation.js' )
load( 'projection.js' )
load( 'atomic_projection.js' )
load( 'blacklist.js' )

db = db.getSiblingDB('redline')

db.blacklist.deleteMany({})
blacklist.forEach( item => db.blacklist.insert( {id: item} ) )
db.cumulative_entries.aggregate( pValid )
db.cumulative_entries.aggregate( tValid )
db.cumulative_entries.aggregate( projection )
db.atomic_entries.aggregate( aValid )

print("Validation Complete")
