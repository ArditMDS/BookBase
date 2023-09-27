<?php

namespace App\Controller;

use App\Entity\Author;
use App\Repository\BookRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/search/{value}', name: 'app_search')]
    public function SearchBar($value, BookRepository $bookRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $filteredBooks = $bookRepository->filterBySearch($value);
        $result = [];
        foreach ($filteredBooks as $book) {
            $authorInfo = [];
            $author = $entityManager->getRepository(Author::class)->findOneBy(['id' => $book->getAuthor()]);
            $authorInfo [] = [
                'id' => $author->getId(),
                'first_name' => $author->getFirstName(),
                'last_name' => $author->getLastName(),
            ];
            $result [] = [
                'id' => $book->getId(),
                'title' => $book->getTitle(),
                'synopsis' => $book->getSynopsis(),
                'image' => $book->getImage(),
                'year' => $book->getYear(),
                'genre' => $book->getGenre(),
                'editor' => $book->getEditor(),
                'date_release' => $book->getReleaseDate(),
                'auteur' => $authorInfo,
            ];

        }
        return new JsonResponse(['result' => $result, 'code_reponse' => Response::HTTP_OK]);
    }
}
