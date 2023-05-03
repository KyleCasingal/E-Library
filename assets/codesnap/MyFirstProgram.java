package assets.codesnap;

import java.util.Scanner;

public class MyFirstProgram {
    
    public static void main(String[] args) {
        Scanner input = new Scanner (System.in);
        
        
        
        System.out.print("Enter your age: ");
        int age = input.nextInt();
        if (age >= 18) {
            System.out.println("You are an adult.");
        } else if (age >= 13) {
    System.out.println("You are a teenager.");
        } else {
    System.out.println("You are a child.");
               }

        
       
        //This a single line comment
    }
}
