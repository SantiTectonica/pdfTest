import * as React from "react"
import { StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from "../pdf";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const IndexPage = () => {
  return (
    <main>
      
      <PDFViewer>
          <Pdf />
      </PDFViewer>
      
      
      <PDFDownloadLink document={<Pdf />}>Descargar </PDFDownloadLink>
      
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
