import java.util.Scanner;

public class SkontiriLibrary {
    public static void main(String[] args) {
        int fictionCount = 0;
        int nonfictionCount = 0;
        int mysteryCount = 0;
        int fantasyCount = 0;
        int total = 0;

        String genre1 = "FICTION";
        String genre2 = "NONFICTION";
        String genre3 = "MYSTERY";
        String genre4 = "FANTASY";

        Scanner input = new Scanner(System.in);
        long cardNumber;

        do {
            System.out.print("Enter Library Card Number (-1 to stop): ");
            cardNumber = input.nextLong();

            if (cardNumber == -1) {
                break;
            }

            if (validateCardNumber(cardNumber)) {
                System.out.print("Are you an active member? (y/n): ");
                char active = input.next().charAt(0);
                input.nextLine();

                if (active == 'y' || active == 'Y') {
                    String genre;
                    boolean validGenre;

                    do {
                        System.out.print("Enter your favorite genre: ");
                        genre = input.nextLine();
                        validGenre = validGenreName(genre, genre1, genre2, genre3, genre4);

                        if (!validGenre) {
                            System.out.println(genre + " is not a valid genre.");
                        }
                    } while (!validGenre);

                    System.out.println("Genre abbreviation: " + abbreviateGenre(genre));

                    if (genre.equalsIgnoreCase(genre1)) {
                        fictionCount++;
                    } else if (genre.equalsIgnoreCase(genre2)) {
                        nonfictionCount++;
                    } else if (genre.equalsIgnoreCase(genre3)) {
                        mysteryCount++;
                    } else if (genre.equalsIgnoreCase(genre4)) {
                        fantasyCount++;
                    }

                    total++;
                } else {
                    System.out.println("Inactive members cannot register a favorite genre.");
                }
            }
        } while (true);

        displayResults(fictionCount, nonfictionCount, mysteryCount, fantasyCount, total, genre1, genre2, genre3,
                genre4);
        input.close();
    }

    public static boolean validateCardNumber(long number) {
        String numStr = Long.toString(number);
        if (numStr.length() == 6) {
            return true;
        } else {
            System.out.println("Library Card Number must be 6 digits!");
            System.out.println("Invalid Libary Card Number!");
            return false;
        }
    }

    public static boolean validGenreName(String genre, String g1, String g2, String g3, String g4) {
        return genre.equalsIgnoreCase(g1) || genre.equalsIgnoreCase(g2) ||
                genre.equalsIgnoreCase(g3) || genre.equalsIgnoreCase(g4);
    }

    public static String abbreviateGenre(String genre) {
        if (genre.equalsIgnoreCase("NONFICTION")) {
            return "NF";
        } else if (genre.equalsIgnoreCase("FICTION") || genre.equalsIgnoreCase("FANTASY")) {
            return "F";
        } else if (genre.equalsIgnoreCase("MYSTERY")) {
            return "M";
        }
        return genre.toUpperCase();
    }

    public static void displayResults(int fiction, int nonfiction, int mystery, int fantasy, int total, String g1,
            String g2, String g3, String g4) {
        if (total == 0) {
            System.out.println("No data to display.");
            return;
        }

        int fictionPercent = (fiction * 100) / total;
        int nonfictionPercent = (nonfiction * 100) / total;
        int mysteryPercent = (mystery * 100) / total;
        int fantasyPercent = (fantasy * 100) / total;

        System.out.println("\nFavorite Genre Stats:");
        System.out.println(g1 + ": " + fictionPercent + "%");
        System.out.println(g2 + ": " + nonfictionPercent + "%");
        System.out.println(g3 + ": " + mysteryPercent + "%");
        System.out.println(g4 + ": " + fantasyPercent + "%");

        String mostPopular = g1;
        int maxCount = fiction;

        if (nonfiction > maxCount) {
            maxCount = nonfiction;
            mostPopular = g2;
        }
        if (mystery > maxCount) {
            maxCount = mystery;
            mostPopular = g3;
        }
        if (fantasy > maxCount) {
            maxCount = fantasy;
            mostPopular = g4;
        }

        System.out.println("Most popular genre: " + mostPopular);
    }
}