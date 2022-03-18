import request from 'supertest'
import server from './src'
import mocks from './src/Routes'


describe("Music", () => {
    let instance = undefined
    beforeEach(() => {
        instance = server.start()
    })

    afterEach(() => {
        instance = server.stop()
    })

    describe("/GET /music", () => {
        it('it sould GET', () => {
            request(instance)
                .get("/music")
                .expect("Content-type", /json/)
                .expect(200)
                .end((err, res) => {
                    if(err){
                        throw err
                    }
                })
        })
    })

})