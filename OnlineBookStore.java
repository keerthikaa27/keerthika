import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Book {
    String title;
    String author;
    double price;

    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Bookstore {
    private Map<String, Book> bookCatalog;
    private Map<String, Integer> cart;

    public Bookstore() {
        this.bookCatalog = new HashMap<>();
        this.cart = new HashMap<>();
    }

    public void addBook(String isbn, Book book) {
        bookCatalog.put(isbn, book);
        System.out.println("Book added to the catalog: " + book.title);
    }

    public void displayCatalog() {
        System.out.println("Book Catalog:");
        for (Map.Entry<String, Book> entry : bookCatalog.entrySet()) {
            Book book = entry.getValue();
            System.out.println(entry.getKey() + ": " + book.title + " by " + book.author + " - $" + book.price);
        }
    }

    public void addToCart(String isbn, int quantity) {
        if (bookCatalog.containsKey(isbn)) {
            cart.put(isbn, cart.getOrDefault(isbn, 0) + quantity);
            System.out.println("Book added to the cart: " + bookCatalog.get(isbn).title + " (Quantity: " + quantity + ")");
        } else {
            System.out.println("Book not found in the catalog.");
        }
    }

    public void viewCart() {
        System.out.println("Shopping Cart:");
        for (Map.Entry<String, Integer> entry : cart.entrySet()) {
            String isbn = entry.getKey();
            int quantity = entry.getValue();
            Book book = bookCatalog.get(isbn);
            System.out.println(isbn + ": " + book.title + " - $" + book.price + " x " + quantity);
        }
    }

    public double checkout() {
        double total = 0;
        System.out.println("Checking out...");

        for (Map.Entry<String, Integer> entry : cart.entrySet()) {
            String isbn = entry.getKey();
            int quantity = entry.getValue();
            Book book = bookCatalog.get(isbn);
            total += book.price * quantity;
        }

        System.out.println("Total amount: $" + total);
        cart.clear(); // Empty the cart after checkout
        return total;
    }

    public static void main(String[] args) {
        Bookstore bookstore = new Bookstore();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1. Add book to catalog");
            System.out.println("2. Display book catalog");
            System.out.println("3. Add book to cart");
            System.out.println("4. View shopping cart");
            System.out.println("5. Checkout");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter ISBN: ");
                    String isbn = scanner.nextLine();
                    System.out.print("Enter title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter author: ");
                    String author = scanner.nextLine();
                    System.out.print("Enter price: $");
                    double price = scanner.nextDouble();
                    bookstore.addBook(isbn, new Book(title, author, price));
                    break;
                case 2:
                    bookstore.displayCatalog();
                    break;
                case 3:
                    System.out.print("Enter ISBN of the book to add to cart: ");
                    String addToCartIsbn = scanner.nextLine();
                    System.out.print("Enter quantity: ");
                    int quantity = scanner.nextInt();
                    bookstore.addToCart(addToCartIsbn, quantity);
                    break;
                case 4:
                    bookstore.viewCart();
                    break;
                case 5:
                    double totalAmount = bookstore.checkout();
                    System.out.println("Thank you for shopping! Total amount: $" + totalAmount);
                    break;
                case 6:
                    System.out.println("Exiting...");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }
}
