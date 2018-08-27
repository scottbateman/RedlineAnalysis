load( 'participant_validation.js' )
load( 'trial_validation.js' )
load( 'projection.js' )
load( 'atomic_projection.js' )

db = db.getSiblingDB('redline')

db.cumulative_entries.aggregate( pValid )
db.cumulative_entries.aggregate( tValid )
db.cumulative_entries.aggregate( projection )
db.atomic_entries.aggregate( aValid )

print("Validation Complete")
