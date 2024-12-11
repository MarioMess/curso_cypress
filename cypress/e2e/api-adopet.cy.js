
describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDQ1MWM2Yi01NDMxLTRiYmUtODg1MS01NmI4NTYzM2YzNjAiLCJhZG9wdGVyTmFtZSI6IkNhbWlsYSIsImlhdCI6MTcwODE4MTgwOSwiZXhwIjoxNzA4NDQxMDA5fQ.RtJOWoIQCVNrT1AQw17n4pYo4N2AAqBOokqv_XJ22to
            `
    it('Mensagens', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopetapi-pgks.onrender.com/mensagem/14451c6b-5431-4bbe-8851-56b85633f360',
            headers: { authorization }
                           
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
                expect(res.duration).to.be.lte(tempoEsperado)
                                    
        })
    })
})