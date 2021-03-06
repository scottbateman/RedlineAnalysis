load( 'participant_validation.js' )
load( 'trial_validation.js' )
load( 'projection.js' )
load( 'atomic_projection.js' )
load( 'blacklist.js' )

db = db.getSiblingDB('redline')

print("Resetting blacklist...")
db.blacklist.deleteMany({})
blacklist.forEach( item => db.blacklist.insert( {id: item} ) )
print("Validating participants...")
db.cumulative_entries.aggregate( pValid )
print("Validating trials 1/2...")
db.cumulative_entries.aggregate( tValid )
print("Validating trials 2/2...")
db.cumulative_entries.aggregate( projection )
print("Validating atomic_entries...")
print("~~This could take a while~~")
db.atomic_entries.aggregate( aValid )

print("Validation Complete")
