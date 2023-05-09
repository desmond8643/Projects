import tweepy
import csv

# Enter your Twitter API keys
consumer_key = 'dB64fOKmvmdvuahJK23hiLUsF'
consumer_secret = 'BZ8P3s7LWZLpPaeWFj6sIfY9IPUpB5WPWdvSEDi5OEJB7obJrk'
access_token = '1655824642907717632-F9A8dHoHLafQdhFiPvnisYC5ZvTWMA'
access_token_secret = 'FDtAyJQNpiKwKraYZKnI1uxgq75aVEmPG13sSKY8nr3vD'

# Authenticate with Twitter API
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

# Initialize Tweepy API client
api = tweepy.API(auth)

# Get user ID from username
user = api.verify_credentials()
user_id = user.id_str

# Retrieve user's followers list
followers = []
for page in tweepy.Cursor(api.get_followers, user_id=user_id, count=200).pages():
    followers.extend(page)

# Retrieve user's following list
following = api.friends_ids(user_id)

with open('twitter_list.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Type', 'User ID'])
    for follower in followers:
        writer.writerow(['Follower', follower.id_str])
    for followee in following:
        writer.writerow(['Following', followee])

print('Follower and following list saved to CSV')
