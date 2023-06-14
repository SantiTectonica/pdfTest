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

  const [isWindow, setIsWindow] = React.useState(false);

  React.useEffect(() => {
    
    setIsWindow(true);

    return ()=> setIsWindow(false);
  }, []);

  if (!isWindow) return null;

  return (
    <main>
      
        <PDFViewer>
            <Pdf />
        </PDFViewer>

        <PDFDownloadLink document={<Pdf />}>Descargar </PDFDownloadLink>
      
      <div class="ngp-form"

        data-form-url="https://secure.everyaction.com/v1/Forms/0sXNvwKAtEaTn2D98vZ3Ng2"

        data-fastaction-endpoint="https://fastaction.ngpvan.com"

        data-inline-errors="true"

        data-fastaction-nologin="true"

        data-databag-endpoint="https://profile.ngpvan.com"

        data-databag="everybody"

        data-mobile-autofocus="false">

      </div>

    </main>
  )
}

export default IndexPage

/*export const Head = () => <title>Home Page</title> */

export const Head = () => (
  <>
    <title>Home Page</title>
    <link rel='preload' href='https://static.everyaction.com/ea-actiontag/at.js' as='script' crossorigin='anonymous' />
    <link rel='preload' href='https://static.everyaction.com/ea-actiontag/at.min.css' as='style' />
    <script type='text/javascript' src='https://static.everyaction.com/ea-actiontag/at.js' crossorigin='anonymous'></script>
  </>
)