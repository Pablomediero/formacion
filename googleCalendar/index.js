const { google } = require('googleapis')
const { OAuth2 } = google.auth

// Introducir Credentials Cliente(ID, TOKEN)
const oAuth2Cli = new OAuth2('891132833537-42n18kvjpt1lg3086udf4shgls0rnt8m.apps.googleusercontent.com',"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")

// Introducir RefresToken(oauthplayground)
oAuth2Cli.setCredentials({
    refresh_token: '1//040O-gf9jABzTCgYIARAAGAQSNwF-L9IrIdWCeytL6IukIQIXEsV29RAFuqySy-NAqifp4o05_IluoPJsRYUijbaKNDUTaIvaF4E',

})

const calendar = google.calendar({ version: 'v3', auth: oAuth2Cli })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
console.log(eventStartTime)
console.log(eventEndTime)
// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Reunion Con Pencho`,
  location: `Valladoliod`,
  description: `Reunion en un local de Valladolid con Pencho Martin.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'UTC',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'UTC',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'UTC',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)















