package com.ecommerce.kodnest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.kodnest.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
