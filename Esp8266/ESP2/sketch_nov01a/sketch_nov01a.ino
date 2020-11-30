#include <NTPClient.h>
// change next line to use with another board/shield

#include <WiFi.h> // for WiFi shield
// #include <WiFi101.h> // for WiFi 101 shield or MKR1000
#include <WiFiUdp.h>
#include <FirebaseESP32.h>
#include<Wire.h> // thu vien man hinh
// #include<Adafruit_GFX.h>//thu vien man hinh
// #include<Adafruit_SSD1306.h>//thu vien man hinh

// #define SCREEN_WIDH 128
// #define SCREEN_HEIGHT 64

// Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

#define FIREBASE_HOST "vann-53570.firebaseio.com" // ten host cua firebase
#define FIREBASE_AUTH "LC6fDYVqNO7VVBfoymADdWtLZVl6jr6WVJxhONrF" // ma 
#define WIFI_SSID "Joy"
#define WIFI_PASSWORD "012345678"
FirebaseData firebaseData; // firebase datbase
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP,"pool.ntp.org",7*3600); // dich mu gio sang mui gio Viet Nam 
int R = 23;
int G = 22;
int Y = 21;

void setup(){
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID ,WIFI_PASSWORD);

  while ( WiFi.status() != WL_CONNECTED ) {
    delay ( 500 );
    Serial.print ( "." );
  }
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  timeClient.begin();

  pinMode(R,OUTPUT);
  pinMode(G,OUTPUT);
  pinMode(Y,OUTPUT);
  
}

void loop() {
int a = random(1000);


//Firebase.setInt(firebaseData,"rfid",a);//set du lieu firebase
if (Firebase.getInt(firebaseData, "MPV")) {
  if (firebaseData.dataType() == "int") {
      int mpv = firebaseData.intData();
    // muc phuc vu a
    if(mpv == 1 || mpv == 2 ){
      green();
    }
    if(mpv == 3){
      yello();
    }
    if(mpv == 4 || mpv == 5 || mpv == 6){
      red();
      }
   



    
    }

}

}
void red(){
  digitalWrite(R,HIGH);
    digitalWrite(Y,LOW);
      digitalWrite(G,LOW);
  
}
void yello(){
  digitalWrite(Y,HIGH);
  delay(500);
  digitalWrite(Y,LOW);
   digitalWrite(R,LOW);
      digitalWrite(G,LOW);
  
  
}
void green(){
    digitalWrite(G,HIGH);
     digitalWrite(Y,LOW);
      digitalWrite(R,LOW);
}
