package application;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		List<Character> array = new ArrayList<Character>();
		String palavra;
		int qnt_caracteres;

		/* Entrada de dados */
		System.out.println("\tQuestão 5 - Caracteres Invertidos");
		try {
			System.out.print("\nInsira uma palavra: ");
			palavra = sc.nextLine();

			/* Separando as letras em uma Lista */
			qnt_caracteres = palavra.length();

			for (int i = 0; i < qnt_caracteres; i++) {
				array.add(palavra.charAt(i));
			}

			/* Invertendo as posições */
			List<Character> auxiliar = new ArrayList<Character>(array);
			array.clear();

			for (int i = qnt_caracteres - 1; i >= 0; i--) {
				array.add(auxiliar.get(i));
			}

			/*Convertendo a lista para String*/
			palavra = array.toString().replaceAll("\\[|\\]",  "").replaceAll(",", "");
			
			System.out.println("Palavra invertida: " + palavra);
			
			
		} catch (Exception e) {
			System.out.println("Ocorreu algum erro! Segue a mensagem: " + e.getMessage());
		} finally {
			sc.close();

		}

	}

}
