const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, verifyMovie} = require('../functions/addMovie')

beforeEach(async()=> {
    await driver.get('http://127.0.0.1:5507/movie-list/')
})

afterAll(async()=> {
    await driver.quit()
})

describe('movie-list tests', ()=> {
    test('should be able to add a movie', async ()=> {
        await addMovie(driver, 'Encanto')
        //will prevent any actions for 5seconds
        await driver.sleep(3000)
    })

    test('displayed movie is the same as the param', async ()=> {
        await verifyMovie(driver, 'Soul')

        await driver.sleep(3000)
    })
})