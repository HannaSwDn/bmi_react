describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })

    beforeEach(async () => {
        await page.reload()
    })

    it("should display 'BMI Calculator' text on page", async () => {
        await expect(page).toMatch('BMI Calculator')
    })

    describe('Metric method', async () => {
        beforeEach(async () => {
            await page.click('button[name="metric"]')
            await page.type('input[name="weight"]', '65')
            await page.type('input[name="height"]', '182')
        })

        it('displays BMI message', async () => {
            await expect(page).toMatch('BMI: 19.62, result: Normal')
        })
    })
})