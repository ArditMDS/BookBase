<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    #[Route('/all-books', name: 'app_get_all_books', methods: ['GET'])]
    public function getAllBooks(EntityManagerInterface $entityManager): JsonResponse
    {
        $books = $entityManager->getRepository(Book::class)->findAll();
        $result = [];
        foreach ($books as $book) {
            $result[] = [
                'id' => $book->getId(),
                'title' => $book->getTitle(),
                'synopsis' => $book->getSynopsis(),
                'author' => $book->getAuthor(),
                'image' => $book->getImage(),
                'year' => $book->getYear(),
                'genre' => $book->getGenre(),
                'editor' => $book->getEditor()
            ];
    }
        return new JsonResponse(['result' => $result, 'code_reponse' => Response::HTTP_OK]);
    }

    #[Route('/get-book/{id}', name: 'app_get_one_book', methods: ['GET'])]
    public function getBookById(EntityManagerInterface $entityManager, $id): JsonResponse
    {
        $book = $entityManager->getRepository(Book::class)->findOneBy(['id' => $id]);
        $result = [];
        $result[] = [
            'id' => $book->getId(),
            'title' => $book->getTitle(),
            'synopsis' => $book->getSynopsis(),
            'author' => $book->getAuthor(),
            'image' => $book->getImage(),
            'year' => $book->getYear(),
            'genre' => $book->getGenre(),
            'editor' => $book->getEditor()
        ];
        return new JsonResponse(['result' => $result, 'code_reponse' => Response::HTTP_OK]);
    }
}
