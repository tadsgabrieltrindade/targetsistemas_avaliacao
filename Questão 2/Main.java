package application;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = 0;

		System.out.println("\tQuestão 2 - Sequência de Fibonacci");
		try {
			System.out.print("\nInsira um número inteiro para a verificação na sequência: ");
			num = sc.nextInt();

			if (verificarNumeroNaSequencia(num)) {
				System.out.println("O número " + num + " está presente na Sequência de Fibonacci!");
			} else {
				System.out.println("O número " + num + " não está presente na Sequência de Fibonacci!");
			}

		} catch (Exception e) {
			System.out.println("Ocorreu um erro! Segue a mensagem: " + e.getMessage());
			
		} finally {
			sc.close();
			System.out.println("\nFim do programa!");
		}
	}

	public static boolean verificarNumeroNaSequencia(int num) {
		List<Integer> sequencia = new ArrayList<Integer>();
		sequencia.add(0);
		sequencia.add(1);
		int tamanho = 0;

		for (int i = 0; i <= num; i++) {
			sequencia.add(sequencia.get(i) + sequencia.get(i + 1));
			if (sequencia.get(i) >= num) {
				tamanho = sequencia.size();
				break;
			}
		}

		if (sequencia.get((tamanho - 3)) == num)
			return true;
		return false;
	}

}
