import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/age-counting");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();

        Scanner sc = new Scanner(inputStream);
        String data = sc.nextLine();
        String[] items = data.replace("{\"data\":\"", "").replace("\"}", "").split(", ");
        int count = 0;

        for (String item : items) {
          String[] keyVal = item.split("=");
          if (keyVal[0].equals("age")) {
            int age = Integer.parseInt(keyVal[1]);
            if (age >= 50) {
              count++;
            }
          }
        }
        
        System.out.println(count);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }   
}