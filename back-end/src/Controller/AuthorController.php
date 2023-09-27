<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthorController extends AbstractController
{
    #[Route('/auteur/{id}', name: 'app_book_by_author', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager, $id): Response
    {
        $books = $entityManager->getRepository(Book::class)->findBy(['author' => $id]);
        $result = [];
        foreach($books as $book) {
            $result [] = [
                'id' => $book->getId(),
                'title' => $book->getTitle(),
                'synopsis' => $book->getSynopsis(),
                'image' => $book->getImage(),
                'year' => $book->getYear(),
                'genre' => $book->getGenre(),
                'editor' => $book->getEditor()
            ];
    }
        return new JsonResponse(['result' => $result, 'code_reponse' => Response::HTTP_OK]);

    }
}
