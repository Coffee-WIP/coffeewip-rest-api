
up: ## Start env
	@docker-compose up -d

stop: ## Stop containers
	@docker-compose stop

shell-node: ## Open a shell on node container
	@docker-compose exec node bash

down: ## Down the containers
	@docker-compose down

restart: ## Stop the containers and start them again
	@docker-compose restart

destroy: ## Stop and destroy the containers
	@docker-compose down -v --rmi all

ps: ## Show started containers
	@docker-compose ps

logs: ## Show logs from all containers
	@docker-compose logs -f