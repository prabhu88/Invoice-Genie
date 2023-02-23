import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';

const styles = StyleSheet.create({
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
});

// Create Document Component
const Invoice = ({ invoice }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Image style={styles.logo} src={invoice.companyLogo} />
                <Text style={styles.title}>{invoice.companyName}</Text>
            </View>
            {/* Company address */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>From:</Text>
                <Text style={styles.address}>{invoice.companyAddress}</Text>
            </View>
            {/* Bill to */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Bill To:</Text>
                <Text>{invoice.billTo}</Text>
            </View>
            {/* Shipped to */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Shipped To:</Text>
                <Text>{invoice.shippedTo}</Text>
            </View>
            {/* Product details */}
            <View style={styles.section}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableColumn, { fontWeight: 'bold' }]}>HSN</Text>
                    <Text style={[styles.tableColumn, { fontWeight: 'bold' }]}>Rate</Text>
                    <Text style={[styles.tableColumn, { fontWeight: 'bold' }]}>Quantity</Text>
                    <Text style={[styles.tableColumn, { fontWeight: 'bold' }]}>Tax rate</Text>
                </View>
                {invoice.products.map((product) => (
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColumn}>{product.hsn}</Text>
                        <Text style={styles.tableColumn}>{product.rate}</Text>
                        <Text style={styles.tableColumn}>{product.quantity}</Text>
                        <Text style={styles.tableColumn}>{product.taxRate}</Text>
                    </View>
                ))}
            </View>
            {/* QR code */}
            <View style={styles.qrCode}>
                <QRCode value={invoice.qrCodeUrl} size={64} />
            </View>
        </Page>
    </Document>
);
const invoice = {
    companyName: 'ACME Corporation',
    companyLogo: 'https://example.com/logo.png',
    companyAddress: '123 Main Street, Anytown USA',
    billTo: 'John Doe, 456 Some Other Street, Anytown USA',
    shippedTo: 'Jane Smith, 789 Yet Another Street, Anytown USA',
    qrCodeUrl: 'https://example.com/qrcode',
    products: [{
        hsn: '',
        rate: '',
        quantity: '',
        taxRate: ''
    }]
};

// Render the PDF
const App = () => <Invoice invoice={invoice} />;

export default App;
