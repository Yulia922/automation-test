describe('visit todo', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/todo')
    const input = cy.get('[data-test="new-todo"]')
    input.type('Buy milk')
    input.type('{enter}')
    const list = cy.get('.todo-list')
    const todoitem = list.contains('Buy milk')
    const checkbox = todoitem.prev()
    checkbox.click()
  })
})