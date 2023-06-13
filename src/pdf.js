import React from "react";
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      padding: '10px',
    },
    page__headline: {
      fontSize: '16px',
      maxWidth: '400px',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    page__text: {
      fontSize: '11px',
      maxWidth: '400px',
    },
    page__content: {
      flexDirection: 'row',
      marginTop: '15px'
    },
    sectionFirst: {
      width: '50%',
      flexDirection: 'column',
      marginRight: '5px',
    },
    sectionSecond: {
      width: '50%',
      flexDirection: 'column',
      marginLeft: '5px',
    },
    box: {
      border: '1px solid black',
      paddingBottom: '20px',
      marginBottom: '20px',
      flexGrow: '1'
    },
    box__title: {
      fontSize: '11px',
      color: 'white',
      backgroundColor: 'black',
      fontWeight: 'bold',
      padding: '5px',
      marginBottom: '10px',
    },
    box__row: {
      flexDirection: 'row',
    },
    box__column: {
      flexDirection: 'column',
    },
    box__text: {
      fontSize: '11px',
      padding: '5px',
      maxWidth: '230px',
    },
    box__textbold: {
      fontSize: '11px',
      padding: '5px',
      fontWeight: 'bold'
    },
    square: {
      width: '20px',
      height: '20px',
      border: '1px solid black',
      textAlign: 'center'
    },
    box__text_underline: {
      fontSize: '11px',
      padding: '5px',
      maxWidth: '230px',
      lineHeight: '1.75',
    },
    square__wrapper: {
      flexDirection: 'row',
      marginLeft: '5px'
    },
    day__wrapper: {
      flexDirection: 'row',
      width: '40px',
      marginLeft: '5px'
    },
    month__wrapper: {
      flexDirection: 'row',
      width: '40px',
      marginLeft: '6px'
    },
    year__wrapper: {
      flexDirection: 'row',
      width: '80px',
      marginLeft: '6px'
    },
    text__date: {
      marginLeft: '8px',
      fontSize: '11px'
    },
    box__signature: {
      border: '5px solid black',
      height: '90px',
      margin: '0 auto',
      marginTop: '15px',
      width: '95%',
    }
  });

const Pdf = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
    
          <Text style={styles.page__headline}>Application to vote by post</Text>
          <Text style={styles.page__text}>Please complete this form in BLACK INK and BLOCK CAPITALS</Text>
          <Text style={styles.page__text}>If you need help filling in this form please call 0800 587 5537</Text>
          
          <View style={styles.page__content}>
    
            <View style={styles.sectionFirst}>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>1. About you</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text} render={() => "Santiago"}/>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Address</Text>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text} render={() => "Address test"}/>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Telephone No.</Text>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text} render={() => "123456"}/>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Email:</Text>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text} render={() => "test@mail.com"}/>
                </View>
              </View>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>2. How long do you want a postal vote?</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Until further notice</Text>
                  <Text style={styles.square} render={() => "test"}/>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__textbold}>For elections/referendums on:</Text>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateOnDay[0]"}/>
                        <Text style={styles.square} render={() => "dateOnDay[1]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateOnMonth[0]"}/>
                        <Text style={styles.square} render={() => "dateOnMonth[1]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateOnYear[0]"}/>
                        <Text style={styles.square} render={() => "dateOnYear[1]"}/>
                        <Text style={styles.square} render={() => "dateOnYear[2]"}/>
                        <Text style={styles.square} render={() => "dateOnYear[3]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.day__wrapper}>
                    <Text style={styles.text__date}>D</Text>
                    <Text style={styles.text__date}>D</Text>
                  </View>
                  <View style={styles.month__wrapper}>
                    <Text style={styles.text__date}>M</Text>
                    <Text style={styles.text__date}>M</Text>
                  </View>
                  <View style={styles.year__wrapper}>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                  </View>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__textbold}>For elections/referendums until:</Text>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateUntilDay[0]"}/>
                        <Text style={styles.square} render={() => "dateUntilDay[1]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateUntilMonth[0]"}/>
                        <Text style={styles.square} render={() => "dateUntilMonth[1]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                  <View style={styles.square__wrapper}>
                    {
                      true ?
                      <>
                        <Text style={styles.square} render={() => "dateUntilYear[0]"}/>
                        <Text style={styles.square} render={() => "dateUntilYear[1]"}/>
                        <Text style={styles.square} render={() => "dateUntilYear[2]"}/>
                        <Text style={styles.square} render={() => "dateUntilYear[3]"}/>
                      </>
                      :
                     <>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                      <View style={styles.square}/>
                     </>
                    }
                  </View>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.day__wrapper}>
                    <Text style={styles.text__date}>D</Text>
                    <Text style={styles.text__date}>D</Text>
                  </View>
                  <View style={styles.month__wrapper}>
                    <Text style={styles.text__date}>M</Text>
                    <Text style={styles.text__date}>M</Text>
                  </View>
                  <View style={styles.year__wrapper}>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                  </View>
                </View>
              </View>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>3. Where should we send your postal vote?</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>The address where I am registered to vote (listed above), or</Text>
                  <Text style={styles.square} render={() => "testest"}/>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>The following address:</Text>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.box__column}>
                    {
                      1 > 0
                       &&
                      <Text style={styles.box__text_underline} render={() => "testesttest"}/>
                    }
                    {
                      1 > 0
                        &&
                      <Text style={styles.box__text_underline} render={() => "testestestesttest"}/>
                    }
                  </View>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Reason for sending your postal vote to a different address:</Text>
                </View>
                <View style={styles.box__row}>
                  {
                    1 > 0
                      &&
                    <Text style={styles.box__text_underline} render={() => "testest"}/>
                  }
                </View>
    
              </View>
    
              </View>
              <View style={styles.sectionSecond}>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>4. Your date of birth</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__textbold}>Date of birth (for example 02 05 1965):</Text>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.square__wrapper}>
                    <Text style={styles.square} render={() => "birthday && birthdayDay[0]"}/>
                    <Text style={styles.square} render={() => "birthday && birthdayDay[1]"}/>
                  </View>
                  <View style={styles.square__wrapper}>
                    <Text style={styles.square} render={() => "birthday && birthdayMonth[0]"}/>
                    <Text style={styles.square} render={() => "birthday && birthdayMonth[1]"}/>
                  </View>
                  <View style={styles.square__wrapper}>
                    <Text style={styles.square} render={() => "birthday && birthdayYear[0]"}/>
                    <Text style={styles.square} render={() => "birthday && birthdayYear[1]"}/>
                    <Text style={styles.square} render={() => "birthday && birthdayYear[2]"}/>
                    <Text style={styles.square} render={() => "birthday && birthdayYear[3]"}/>
                  </View>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.day__wrapper}>
                    <Text style={styles.text__date}>D</Text>
                    <Text style={styles.text__date}>D</Text>
                  </View>
                  <View style={styles.month__wrapper}>
                    <Text style={styles.text__date}>M</Text>
                    <Text style={styles.text__date}>M</Text>
                  </View>
                  <View style={styles.year__wrapper}>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                  </View>
                </View>
    
              </View>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>5. Your signature and declaration</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>As far as I know, the details on this form are true and accurate.  I understand that to provide false information on this form is an offence, punishable on conviction by imprisonment of up to 2 years and/or a fine.</Text>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Sign in the box below using BLACK ink.</Text>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__textbold}>Important - Please keep signature within the border.</Text>
                </View>
    
                <View style={styles.box__signature}></View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Date of Signing:</Text>
                </View>
    
                <View style={styles.box__row}>
                  <View style={styles.square__wrapper}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                  </View>
                  <View style={styles.square__wrapper}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                  </View>
                  <View style={styles.square__wrapper}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                  </View>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.day__wrapper}>
                    <Text style={styles.text__date}>D</Text>
                    <Text style={styles.text__date}>D</Text>
                  </View>
                  <View style={styles.month__wrapper}>
                    <Text style={styles.text__date}>M</Text>
                    <Text style={styles.text__date}>M</Text>
                  </View>
                  <View style={styles.year__wrapper}>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                    <Text style={styles.text__date}>Y</Text>
                  </View>
                </View>
    
              </View>
    
              <View style={styles.box}>
                <Text style={styles.box__title}>6. Can’t provide a signature?</Text>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>I cannot provide a signature because:</Text>
                </View>
                <View style={styles.box__row}>
                  <Text style={styles.box__text_underline} render={() => "formData.signatureReason"}/>
                  <View style={styles.box__column}>
                    <View style={styles.line}></View>
                  </View>
                </View>
    
                <View style={styles.box__row}>
                  <Text style={styles.box__text}>Name and address of the person who helped you complete this form:</Text>
                </View>
                <View style={styles.box__row}>
                  <View style={styles.box__column}>
                    <Text style={styles.box__text_underline} render={() => "formData.helperName"}/>
                    <Text style={styles.box__text_underline} render={() => "formData.helperAddress"}/>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                  </View>
                </View>
    
              </View>
    
            </View>
          </View>
    
            </Page>
        </Document>
      )
}

export default Pdf;