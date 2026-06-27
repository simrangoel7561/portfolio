/**
 * Manual verification test for Section component
 * Run: Import and use in App.jsx to verify rendering
 */

import Section from './Section'

// Test 1: Component renders with children
function testBasicRender() {
  return (
    <Section>
      <h2>Test Content</h2>
      <p>This is test content inside a section</p>
    </Section>
  )
}

// Test 2: Component accepts className prop
function testWithClassName() {
  return (
    <Section className="custom-class">
      <p>Custom styled section</p>
    </Section>
  )
}

// Test 3: Component uses semantic <section> element
// Verify in browser DevTools that element is <section>, not <div>

export { testBasicRender, testWithClassName }
