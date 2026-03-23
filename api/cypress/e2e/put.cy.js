describe('PUT /api/users/:id', () => {

    let userId

    const originalUser = {
        name: 'Peter Parker',
        email: 'parker@stark.com',
        password: '123456'
    }

    const updatedUser = {
        name: 'Spiderman',
        email: 'spider@marvel.com',
        password: 'pwd123'
    }

    before(() => {
        cy.task('deleteUser', updatedUser.email)
        cy.task('deleteUser', originalUser.email)

        cy.postUser(originalUser).then(response => {
            cy.log(response.body.user.id)
            userId = response.body.user.id
        })
    })

    it('Deve atualizar um usuário existente', () => {
        cy.putUser(userId, updatedUser).then(response => {
            expect(response.status).to.eq(204)
        })
    })

    after(() => {
        cy.getUsers().then(response => {
            const spider = response.body.find(user => user.id === userId)
            expect(spider).to.exist
            expect(spider.name).to.eq(updatedUser.name)
            expect(spider.email).to.eq(updatedUser.email)
        })
    })

    // context('Campos obrigatórios', () => {
    //     it('O campo name deve ser obrigatório', () => {

    //         const user = {
    //             email: 'storm@xman.com',
    //             password: 'pwd123'
    //         }
    //         cy.putUser(1, user).then((response) => {
    //             expect(response.status).to.eq(400)

    //             expect(response.body.error).to.eq('Name is required')

    //         })
    //     })

    //     it('O campo email deve ser obrigatório', () => {

    //         const user = {
    //             name: 'Jim Gray',
    //             password: 'pwd123'
    //         }
    //         cy.putUser(1, user).then((response) => {
    //             expect(response.status).to.eq(400)

    //             expect(response.body.error).to.eq('Email is required')

    //         })

    //     })

    //     it('O campo senha deve ser obrigatória', () => {

    //         const user = {
    //             name: 'Xavier',
    //             email: 'xavier@xman.com'
    //         }
    //         cy.putUser(1, user).then((response) => {
    //             expect(response.status).to.eq(400)

    //             expect(response.body.error).to.eq('Password is required')

    //         })

    //     })
    // })
})