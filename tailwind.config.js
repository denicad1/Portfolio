module.exports = {
    content: [ './index.html',
              './**/*.js'],
    theme: {
      borderRadius:{
        'full':'50%'
      },
      extend: {
        transitionProperty: {
          'width': 'width'
      },
      colors: {
        'matte-dark-orange' : '#E27D60',
        'matte-orange':'#E8A87C',
        'matte-dark-green':'#41B3A3',
        'matte-green':'#85DCBA',
        'matte-purple':'#C38D9E',
      }
      },
    },
    // safelist:['w-60'],
    plugins: []
  }