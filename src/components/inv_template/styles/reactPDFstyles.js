import { StyleSheet } from '@react-pdf/renderer'
const style1 = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    address: {
        marginBottom: 10,
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    tableColumn: {
        width: '25%',
    },
    qrCode: {
        alignSelf: 'flex-end',
        marginTop: 10,
        width: 64,
        height: 64,
    },
})

const compose = (classes) => {
    const css = {...style1}
    const classesArray = classes.replace(/\s+/g, ' ').split(' ')
    classesArray.forEach((className) => {
      if (typeof styles[className] !== undefined) {
        Object.assign(css, styles[className])
      }
    })
  
    return css
  }
  
  export default compose