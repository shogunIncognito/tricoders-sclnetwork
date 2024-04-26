/**
 * Inicia sesion y manda al /dash
 */
const Login = (): void => {
  cy.visit('/auth/signin')
  cy.get('input[name="email"]').type('test@gmail.com')
  cy.get('input[name="password"]').type('test1234')
  cy.get('button').contains('Iniciar sesión').click()
}

describe('Navegación', () => {
  it('Debe ir al login desde el home', () => {
    cy.visit('/')
    cy.get('a').contains('Inicia sesión').click()

    cy.url().should('include', '/auth/signin')
  })
})

describe('Autenticación', () => {
  it('Debe hacer login', () => {
    Login()
    cy.url().should('contain', '/dash')
  })

  it('Debe cerrar sesión', () => {
    Login()
    cy.get('button[name="user-options"]').click()
    cy.get('button').contains('Cerrar sesión').click()
    cy.url().should('include', '/auth/signin')
  })

  it('Hace el login y si regresa a login o register debe regresarse al dash', () => {
    Login()

    cy.url().should('include', '/dash')

    cy.visit('/auth/signin')
    cy.url().should('include', '/dash')

    cy.visit('/auth/signup')
    cy.url().should('include', '/dash')
  })
})

describe('Tratando publicaciones', () => {
  it('Debe crear una publicación', () => {
    Login()
    const postContent = 'Esto es una publicación de prueba'
    cy.get('button').contains('Crear publicación').click()

    cy.get('input[id="name"]').type(postContent)
    cy.get('input[type="file"]').attachFile('muñeca.jpg')

    cy.get('button').contains('Publicar').click()

    cy.get('.my-masonry-grid').get('p').contains(postContent)
  })
})
