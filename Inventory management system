import java.io.*;
import java.util.*;

class Product {
    private String name;
    private int quantity;
    private double price;

    public Product(String name, int quantity, double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName() { return name; }
    public int getQuantity() { return quantity; }
    public double getPrice() { return price; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    @Override
    public String toString() {
        return String.format("%-20s %-10d $%.2f", name, quantity, price);
    }
}

class InventoryManager {
    private Map<String, Product> inventory;
    private static final String FILE_NAME = "inventory.csv";

    public InventoryManager() {
        inventory = new HashMap<>();
        loadFromFile();
    }

    public void addProduct(String name, int quantity, double price) {
        inventory.put(name.toLowerCase(), new Product(name, quantity, price));
        saveToFile();
    }

    public void updateQuantity(String name, int newQuantity) {
        Product product = inventory.get(name.toLowerCase());
        if (product != null) {
            product.setQuantity(newQuantity);
            saveToFile();
            System.out.println("Quantity updated for " + name);
        } else {
            System.out.println(name + " not found in inventory.");
        }
    }

    public void deleteProduct(String name) {
        if (inventory.remove(name.toLowerCase()) != null) {
            saveToFile();
            System.out.println(name + " removed from inventory.");
        } else {
            System.out.println(name + " not found.");
        }
    }

    public void searchProduct(String name) {
        Product product = inventory.get(name.toLowerCase());
        if (product != null) {
            System.out.println("Found: " + product);
        } else {
            System.out.println(name + " not found in inventory.");
        }
    }

    public void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is empty.");
            return;
        }
        System.out.printf("%-20s %-10s %-10s%n", "Product", "Quantity", "Price");
        System.out.println("---------------------------------------------");
        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }

    public void lowStockReport(int threshold) {
        System.out.println("Low Stock Report (below " + threshold + "):");
        boolean found = false;
        for (Product product : inventory.values()) {
            if (product.getQuantity() < threshold) {
                System.out.println(product);
                found = true;
            }
        }
        if (!found) System.out.println("No products are below the threshold.");
    }

    public void totalInventoryValue() {
        double total = 0;
        for (Product product : inventory.values()) {
            total += product.getQuantity() * product.getPrice();
        }
        System.out.printf("Total Inventory Value: $%.2f%n", total);
    }

    private void saveToFile() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(FILE_NAME))) {
            for (Product product : inventory.values()) {
                writer.write(product.getName() + "," + product.getQuantity() + "," + product.getPrice());
                writer.newLine();
            }
        } catch (IOException e) {
            System.out.println("Error saving inventory: " + e.getMessage());
        }
    }

    private void loadFromFile() {
        File file = new File(FILE_NAME);
        if (!file.exists()) return;

        try (BufferedReader reader = new BufferedReader(new FileReader(FILE_NAME))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                String name = parts[0];
                int quantity = Integer.parseInt(parts[1]);
                double price = Double.parseDouble(parts[2]);
                inventory.put(name.toLowerCase(), new Product(name, quantity, price));
            }
        } catch (IOException e) {
            System.out.println("Error loading inventory: " + e.getMessage());
        }
    }
}

public class InventoryManagementSystem {
    public static void main(String[] args) {
        InventoryManager inventoryManager = new InventoryManager();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n--- Inventory Management System ---");
            System.out.println("1. Add Product");
            System.out.println("2. Update Quantity");
            System.out.println("3. Delete Product");
            System.out.println("4. Search Product");
            System.out.println("5. Display Inventory");
            System.out.println("6. Low Stock Report");
            System.out.println("7. Total Inventory Value");
            System.out.println("8. Exit");
            System.out.print("Enter your choice: ");

            int choice = getIntInput(scanner);

            switch (choice) {
                case 1:
                    System.out.print("Enter product name: ");
                    String name = scanner.nextLine();
                    int quantity = getIntInput(scanner, "Enter quantity: ");
                    double price = getDoubleInput(scanner, "Enter price: ");
                    inventoryManager.addProduct(name, quantity, price);
                    System.out.println("Product added.");
                    break;

                case 2:
                    System.out.print("Enter product name: ");
                    String updateName = scanner.nextLine();
                    int newQuantity = getIntInput(scanner, "Enter new quantity: ");
                    inventoryManager.updateQuantity(updateName, newQuantity);
                    break;

                case 3:
                    System.out.print("Enter product name to delete: ");
                    String deleteName = scanner.nextLine();
                    inventoryManager.deleteProduct(deleteName);
                    break;

                case 4:
                    System.out.print("Enter product name to search: ");
                    String searchName = scanner.nextLine();
                    inventoryManager.searchProduct(searchName);
                    break;

                case 5:
                    inventoryManager.displayInventory();
                    break;

                case 6:
                    int threshold = getIntInput(scanner, "Enter stock threshold: ");
                    inventoryManager.lowStockReport(threshold);
                    break;

                case 7:
                    inventoryManager.totalInventoryValue();
                    break;

                case 8:
                    System.out.println("Exiting system. Goodbye!");
                    System.exit(0);

                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }

    private static int getIntInput(Scanner scanner) {
        while (!scanner.hasNextInt()) {
            System.out.print("Invalid input. Please enter a number: ");
            scanner.next();
        }
        int value = scanner.nextInt();
        scanner.nextLine(); // consume newline
        return value;
    }

    private static int getIntInput(Scanner scanner, String prompt) {
        System.out.print(prompt);
        return getIntInput(scanner);
    }

    private static double getDoubleInput(Scanner scanner, String prompt) {
        System.out.print(prompt);
        while (!scanner.hasNextDouble()) {
            System.out.print("Invalid input. Please enter a valid price: ");
            scanner.next();
        }
        double value = scanner.nextDouble();
        scanner.nextLine(); // consume newline
        return value;
    }
}

