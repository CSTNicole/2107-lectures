import NextAuth from 'next-auth'

import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
providers: [
  DiscordProvider({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  })
],
  database: process.env.DATABASE_URL,
  // session: {
  //     jwt: true
  // },
  callbacks: {
    async session({session, user, token}) 
    {
      console.log('user', user)
      console.log('token', token)
      
      session.accesstoken = token.accesstoken;
      //session = {}
      
      //check if user exists?
      //if does then get it
      //otherwise create user in db
      //add user to session
      //session.user = {};

      return session;
    }
  },
  secret: process.env.NEXT_AUTH_SECRET
})