import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { timeEntryValidationSchema } from 'validationSchema/time-entries';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.time_entry
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getTimeEntryById();
    case 'PUT':
      return updateTimeEntryById();
    case 'DELETE':
      return deleteTimeEntryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTimeEntryById() {
    const data = await prisma.time_entry.findFirst(convertQueryToPrismaUtil(req.query, 'time_entry'));
    return res.status(200).json(data);
  }

  async function updateTimeEntryById() {
    await timeEntryValidationSchema.validate(req.body);
    const data = await prisma.time_entry.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteTimeEntryById() {
    const data = await prisma.time_entry.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
