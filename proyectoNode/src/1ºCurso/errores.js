process.on('unhandleRejection',(err,p) => {
    console.log("Error unhandleRejection "+err)
})

process.on('uncaughtException',(err) => {
    console.log("Error uncaughtException "+err)
})

/* Promise(resolve => JSON.parse({color: 'blue'})) */
