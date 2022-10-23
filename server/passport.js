const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const SteamStrategy = require("passport-steam").Strategy;
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require("bcryptjs")

const { Users } = require("./models")
const passport = require("passport")


passport.use(
    new LocalStrategy(
        { usernameField: 'email', passwordField: 'password' },
        function (email, userPassword, done) {

            Users.findOne({ where: { userId: email } }).then(user => {

                const { password, ...otherDetails } = user.dataValues

                if (!user) return done(null, false);
                const correctPass = bcrypt.compareSync(userPassword, password);

                if (!correctPass) return done(null, false);
                return done(null, otherDetails);

            }).catch(err => done(err, false))

        }
    )
);


passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new SteamStrategy(
        {
            apiKey: process.env.STEAM_API,
            realm: 'http://localhost:8000',
            returnURL: "http://localhost:8000/auth/steam/callback",
        },
        function (identifier, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});