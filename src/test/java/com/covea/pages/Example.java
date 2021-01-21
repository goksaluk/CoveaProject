package com.covea.pages;

import java.util.HashSet;
import java.util.Set;

public class Example {


    public static void main(String[] args) {

        int[] numbers = {1999, 1, -2, 15, -50, 28, 121, -6, -45, 77, 32, 10};

        int[] check = new int[numbers.length - 2];

        for (int i = 0; i < check.length; i++) {
            check[i] = numbers[i] + numbers[i + 1] + numbers[i + 2];
        }
        for (int i = 0; i < 3; i++) {
            int biggestSum = Integer.MIN_VALUE;
            int x = 0; // to store
            for (int j = 0; j < check.length; j++) {
                if (check[j] > biggestSum) {
                    biggestSum = check[j];
                    x = j;
                }
            }
            System.out.println("biggestSum = " + biggestSum);
            System.out.println(numbers[x]+", "+numbers[x+1]+", "+numbers[x+2]);
            check[x]=Integer.MIN_VALUE;

        }


    }


}
